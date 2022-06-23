package backend.backend.services.entityService;

import backend.backend.helpers.advice.CustomException;
import backend.backend.helpers.payload.request.CartItemRequest;
import backend.backend.helpers.payload.request.ProductRequest;
import backend.backend.helpers.payload.response.CartItemResponse;
import backend.backend.helpers.payload.response.ProductResponse;
import backend.backend.helpers.utils.SubUtils;
import backend.backend.persitence.entities.CartItem;
import backend.backend.persitence.entities.CartItemId;
import backend.backend.persitence.repository.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartItemRepository cartItemRepository;

    public List<CartItemResponse> getCartItemsByIdCustomer(int idCustomer) {
        List<CartItemResponse> result = new ArrayList<>();
        for (CartItem cartItem : cartItemRepository.findByIdCustomer(idCustomer)) {
            ProductResponse productResponse = (ProductResponse) SubUtils.mapperObject(cartItem.getProduct(),
                    new ProductResponse());
            result.add(new CartItemResponse(cartItem.getIdCustomer(), productResponse, cartItem.getQuantity()));
        }
        return result;
    }

    public String addToCart(CartItemRequest cartItem) {
        int idUser = SubUtils.getCurrentUser().getId();
        Optional<CartItem> optional = cartItemRepository
                .findById(new CartItemId(idUser, cartItem.getProduct().getIdProduct()));
        if (optional.isPresent()) {
            CartItem cartItem1 = optional.get();
            int quantity = cartItem.getQuantity() + cartItem1.getQuantity();
            if (quantity > cartItem1.getProduct().getQuantity()) {
                throw new CustomException("vượt quá giới hạn tồn kho");
            }
            if (quantity > 0) {
                cartItem1.setQuantity(quantity);
            }
            cartItemRepository.save(cartItem1);
        } else {
            if (cartItem.getQuantity() > cartItem.getProduct().getQuantity()) {
                throw new CustomException("vượt quá giới hạn tồn kho");
            }
            CartItem cartItem1 = new CartItem();
            cartItem1.setIdCustomer(idUser);
            cartItem1.setIdProduct(cartItem.getProduct().getIdProduct());
            cartItem1.setQuantity(cartItem.getQuantity());
            cartItemRepository.save(cartItem1);
        }
        return "ok";
    }

    public String deleteCartItem(ProductRequest productRequest) {
        int idUser = SubUtils.getCurrentUser().getId();
        Optional<CartItem> optional = cartItemRepository
                .findById(new CartItemId(idUser, productRequest.getIdProduct()));
        cartItemRepository.delete(optional.get());
        return "ok";
    }

    public String updateProduct(CartItemRequest cartItem) {
        int idUser = SubUtils.getCurrentUser().getId();
        Optional<CartItem> optional = cartItemRepository
                .findById(new CartItemId(idUser, cartItem.getProduct().getIdProduct()));
        CartItem cartItem1 = optional.get();
        if (cartItem.getQuantity() > cartItem1.getProduct().getQuantity()) {
            throw new CustomException("vượt quá giới hạn tồn kho");
        } else {
            cartItem1.setQuantity(cartItem.getQuantity());
        }
        cartItemRepository.save(cartItem1);
        return "ok";
    }
}
