CREATE DATABASE shop
GO
USE shop
SET DATEFORMAT DMY
GO

        
CREATE SEQUENCE [dbo].[hibernate_sequence] 
 AS [bigint]
 START WITH 10000000
 INCREMENT BY 1
 MINVALUE -9223372036854775808
 MAXVALUE 9223372036854775807
 CACHE 
 go

create table Role
(
    [id] [int] IDENTITY(1,1) NOT NULL,
    [role_name] [int] NOT NULL,
    PRIMARY KEY ([id])
)
--dữ liệu bảng AddressCell
create table Addrress_Cell
(
    id int  PRIMARY KEY,
    name nvarchar(50) not null,
)
--dữ liệu bảng Address
create table Addrress
(
    id nvarchar(50) PRIMARY KEY,
    province_id int NOT NULL FOREIGN KEY REFERENCES Addrress_Cell ([id]),
    district_id int NOT NULL FOREIGN KEY REFERENCES Addrress_Cell ([id]),
    ward_code int NOT NULL FOREIGN KEY REFERENCES Addrress_Cell ([id]),
    sub_locate nvarchar(50) not null,

)
--dữ liệu bảng Privilege
create table Privilege
(
    id int IDENTITY(1,1) PRIMARY KEY,
    ID_Role int NOT NULL FOREIGN KEY REFERENCES Role ([id]),
    Name_Privilege nvarchar(50) not null,
)
CREATE TABLE ACCOUNT
(
    ID_ACCOUNT int IDENTITY(1,1) PRIMARY KEY,
    --Admin là ad ,student là st,professor là pr
    email nvarchar(50) NOT NULL,
    password_hash nvarchar(255) NOT NULL,
    provider varchar(255) NOT NULL,
    provider_id varchar(255),
    [created] [datetime2](7),
    [updated] [datetime2](7),
    [last_expires] [datetime2](7),
    [accept_terms] [bit]
)
CREATE TABLE ACCOUNT_Has_Role
(
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    [id] int NOT NULL FOREIGN KEY REFERENCES Role ([id]),
    PRIMARY KEY (ID_ACCOUNT,[id])
)
CREATE TABLE Refresh_Token
(
    [id] [int] IDENTITY(1,1) NOT NULL,
    [token] [nvarchar](max) NULL,
    [expires] [datetime2](7) NOT NULL,
    [created] [datetime2](7) NOT NULL,
    [created_by_ip] [nvarchar](max) NULL,
    [revoked] [datetime2](7) NULL,
    [revoked_by_ip] [nvarchar](max) NULL,
    [replaced_by_token] [nvarchar](max) NULL,
    [reason_revoked] [nvarchar](max) NULL,
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    PRIMARY KEY ([id])
)
CREATE TABLE Verification_Token
(
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    [verification_token_content] [nvarchar](max) NULL,
    [verified] [datetime2](7) NULL,
    PRIMARY KEY (ID_ACCOUNT)
)
CREATE TABLE Reset_Token
(
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    [reset_token_content] [nvarchar](max) NULL,
    [reset_token_expires] [datetime2](7) NULL,
    [password_reset] [datetime2](7) NULL,
    PRIMARY KEY (ID_ACCOUNT)
)
CREATE TABLE Reset_Phone_Token
(
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    [reset_token_content] [nvarchar](6) NULL,
    [reset_token_expires] [datetime2](7) NULL,
    [phone_reset] [datetime2](7) NULL,
    PRIMARY KEY (ID_ACCOUNT)
)
CREATE TABLE Reset_Email_Token
(
    ID_ACCOUNT int NOT NULL FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    [reset_token_content] [nvarchar](6) NULL,
    [reset_token_expires] [datetime2](7) NULL,
    [email_reset] [datetime2](7) NULL,
    PRIMARY KEY (ID_ACCOUNT)
)
CREATE TABLE Customer
(
    id_customer int FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,
    name nvarchar(max) ,
    phone_number varchar(15),
    gender CHAR(1),
    birthday date,
    img_url VARCHAR(MAX),
    address_id nvarchar(50) NOT NULL FOREIGN KEY REFERENCES Addrress ([id]) unique,
	pubkey nvarchar(max),
    PRIMARY KEY (id_customer)
)
CREATE TABLE Shop
(
    id_shop int FOREIGN KEY REFERENCES ACCOUNT (ID_ACCOUNT) ,    
    name nvarchar(max) ,
    phone_number varchar(15),
    img_url VARCHAR(MAX),
    address_id nvarchar(50)  NOT NULL FOREIGN KEY REFERENCES Addrress ([id]) unique,
    description nvarchar(max),
    PRIMARY KEY (id_shop)
)
CREATE TABLE Shop_Category
(
    id_shop_category int IDENTITY(1,1) ,
    id_shop int FOREIGN KEY REFERENCES Shop (id_shop),
    name nvarchar(max),
    PRIMARY KEY (id_shop_category)
)
CREATE TABLE Category
(
    id_category int IDENTITY(1,1) ,
    id_category_parent int null FOREIGN KEY REFERENCES Category  (id_category),
    name nvarchar(max),
    PRIMARY KEY (id_category)
)
CREATE TABLE Single_Product_Page
(
    id_single_product_page int IDENTITY(1,1) ,
    id_shop int FOREIGN KEY REFERENCES Shop (id_shop),
    id_category int FOREIGN KEY REFERENCES Category (id_category),
    id_shop_category int FOREIGN KEY REFERENCES Shop_Category (id_shop_category),
    name nvarchar(max),
    description nvarchar(max),
    status tinyint,
    PRIMARY KEY (id_single_product_page)
)
CREATE TABLE Product
(
    id_product int IDENTITY(1,1) ,
    id_single_product_page int FOREIGN KEY REFERENCES Single_Product_Page (id_single_product_page),
    name nvarchar(max),
    quantity int,
    sold_count int,
    price money,
    img_url VARCHAR(MAX),
    PRIMARY KEY (id_product)
)
CREATE TABLE Evaluate
(
    id_evaluate int IDENTITY(1,1) ,
    id_single_product_page int FOREIGN KEY REFERENCES Single_Product_Page (id_single_product_page),
    id_customer int FOREIGN KEY REFERENCES Customer (id_customer),
    date_create datetime,
    date_update datetime,
    like_count int ,
    rate_star tinyint ,
    content nvarchar(max),
    PRIMARY KEY (id_evaluate)
)
CREATE TABLE Evaluate_Reply
(
    id_evaluate_reply int IDENTITY(1,1) ,
    id_evaluate int FOREIGN KEY REFERENCES Evaluate (id_evaluate),
    id_shop int FOREIGN KEY REFERENCES Shop (id_shop),
    date_create datetime,
    date_update datetime,
    content nvarchar(max),
    PRIMARY KEY (id_evaluate_reply)
)
CREATE TABLE Cart_Item
(
    id_customer int FOREIGN KEY REFERENCES Customer (id_customer),
    id_product int FOREIGN KEY REFERENCES Product (id_product),
    quantity int,
    PRIMARY KEY (id_customer,id_product)
)
CREATE TABLE Order_Item
(
    id_order_item int IDENTITY(1,1) ,
    id_customer int FOREIGN KEY REFERENCES Customer (id_customer),
    id_product int FOREIGN KEY REFERENCES Product (id_product),
    status tinyint,
	quantity int,
    PRIMARY KEY (id_order_item)
)
CREATE TABLE Wallet_Shop
(
    id_shop int FOREIGN KEY REFERENCES Shop (id_shop),
    total money,
    PRIMARY KEY (id_shop)
)
CREATE TABLE Wallet_Customer
(
    id_customer int FOREIGN KEY REFERENCES Customer (id_customer),
    total money,
    PRIMARY KEY (id_customer)
)
CREATE TABLE Sale
(
    id_sale int IDENTITY(1,1) ,
    sale_condition varchar(50) ,
    discount_kind varchar(50) ,
    discount_condition varchar(50),
    discount_value money,
    PRIMARY KEY (id_sale)
)
CREATE TABLE Voucher
(
    id_voucher int IDENTITY(1,1) ,
    id_sale int FOREIGN KEY REFERENCES Sale (id_sale),
    name nvarchar(max),
    code VARCHAR(MAX),
    quantity_left int,
    date_start DATETIME,
    date_end DATETIME,
    PRIMARY KEY (id_voucher)
)
CREATE TABLE Promote
(
    id_promote int IDENTITY(1,1) ,
    id_sale int FOREIGN KEY REFERENCES Sale (id_sale),
    name nvarchar(max),
    date_start DATETIME,
    date_end DATETIME,
    PRIMARY KEY (id_promote)
)
CREATE TABLE Promote_Product_List
(
    id_promote int FOREIGN KEY REFERENCES Promote (id_promote),
    id_product int FOREIGN KEY REFERENCES Product (id_product),
    PRIMARY KEY (id_promote,id_product)
)
CREATE TABLE Chat
(
    id_account int FOREIGN KEY REFERENCES Account (id_account),
    is_account_shop BIT,
    id_account_reply int FOREIGN KEY REFERENCES Account (id_account),
    is_account_reply_shop BIT,
    PRIMARY KEY (id_account,id_account_reply)
)
CREATE TABLE Chat_Line
(
    id_chat_line int IDENTITY(1,1) ,
    id_account int ,
    id_account_reply int,
    id_product int FOREIGN KEY REFERENCES Product (id_product),
    date_create datetime,
    date_update datetime,
    content nvarchar(max),
    PRIMARY KEY (id_chat_line)
)

-- CONSTRAINT
ALTER TABLE Chat_Line
  ADD CONSTRAINT FK_Chat_Chat_Line
  FOREIGN KEY(id_account, id_account_reply) REFERENCES Chat(id_account, id_account_reply)


-- TRIGGER

-- FUNCTION
-- PROCEDURE
go
create PROCEDURE updateAddrress_Cell
    @name nvarchar(50),
	@id int
As
Begin
IF EXISTS (SELECT * FROM Addrress_Cell WHERE id=@id)
    UPDATE Addrress_Cell SET name =@name WHERE id=@id
ELSE
    INSERT INTO Addrress_Cell VALUES (@id,@name)
End
go
create PROCEDURE updateAddrress
    @id nvarchar(50),
	@province_id int,
	@district_id int,
	@ward_code int,
	@sub_locate nvarchar(50)

As
Begin
IF EXISTS (SELECT * FROM Addrress WHERE id=@id)
    UPDATE Addrress SET province_id = @province_id,district_id = @district_id,ward_code = @ward_code,sub_locate=@sub_locate  WHERE id=@id
ELSE
    INSERT INTO Addrress VALUES (@id,@province_id,@district_id,@ward_code,@sub_locate)
End

go
INSERT Addrress_Cell(id, name)
SELECT id, name  FROM Addrress_Cell AS t
WHERE NOT EXISTS (SELECT 1 FROM Addrress_Cell AS d WHERE id = t.id );
go
---

INSERT INTO Role
VALUES
    (0)
INSERT INTO Role
VALUES
    (1)

-- INSERT
INSERT INTO ACCOUNT
Values(N'sa@gmail.com', N'$2a$10$g/AIRfhpFhGPjAnUw5m8qu974.uI71HwrBpjXeYQu4khl8KI.4VgS', 'local', null, null, null, null, 1);
INSERT INTO ACCOUNT_has_role
VALUES
    (1, 1)
;
INSERT INTO ACCOUNT
Values(N'user@gmail.com', N'$2a$10$g/AIRfhpFhGPjAnUw5m8qu974.uI71HwrBpjXeYQu4khl8KI.4VgS', 'local', null, null, null, null, 1);
INSERT INTO ACCOUNT_has_role
VALUES
    (2, 2)
;
INSERT INTO Verification_Token
VALUES
    (1, null, getdate())
	INSERT INTO Verification_Token
VALUES
    (2, null, getdate())
INSERT INTO Addrress_Cell VALUES(202, N'TP Hồ Chí Minh');

INSERT INTO Addrress_Cell VALUES(1461, N'Quận Gò Vấp');

INSERT INTO Addrress_Cell VALUES(21305, N'Phường 7');

INSERT INTO Addrress VALUES(N'shop1', 202,1461,21305,N'Nguyễn Văn Nghi');
INSERT INTO Addrress VALUES(N'customer1', 202,1461,21305,N'Nguyễn Văn Nghi');

-- Customer
INSERT INTO Customer
VALUES(1, N'Lê Đình Phùng', '0378876395', 'm', '25/08/2000', '',N'customer1',null);

INSERT INTO Customer
VALUES(2, N'Nguyễn Ngô Minh Hiển', '0339579758', 'm', '28/09/2000', '',1,null);
update Customer set phone_number = '0339579758' where id_customer = 2;
-- Shop
INSERT INTO Shop
VALUES(1, N'shop của Phùng', '0378876395', N'', N'shop1', N'Shop ác nhất hành tinh');

INSERT INTO Shop
VALUES(2, N'Nguyễn Ngô Minh Hiển', '0339579758', N'', 1, N'Shop ác nhất vũ trụ');

-- Shop_Category
INSERT INTO Shop_Category
VALUES(1, N'Điện Thoại');
INSERT INTO Shop_Category
VALUES(1, N'Áo Dú');
INSERT INTO Shop_Category
VALUES(1, N'Quần Xì');

-- Category
-- Level 1 (1 - 30)
INSERT INTO Category
    (name)
VALUES(N'Thời Trang Nữ');
INSERT INTO Category
    (name)
VALUES(N'Thời Trang Nam');
INSERT INTO Category
    (name)
VALUES(N'Sắc Đẹp');
INSERT INTO Category
    (name)
VALUES(N'Sức Khỏe');
INSERT INTO Category
    (name)
VALUES(N'Phụ Kiện Thời Trang');
INSERT INTO Category
    (name)
VALUES(N'Thiết Bị Điện Gia Dụng');
INSERT INTO Category
    (name)
VALUES(N'Giày Dép Nam');
INSERT INTO Category
    (name)
VALUES(N'Điện Thoại &amp; Phụ Kiện');
INSERT INTO Category
    (name)
VALUES(N'Du lịch &amp; Hành lý');
INSERT INTO Category
    (name)
VALUES(N'Túi Ví Nữ');
INSERT INTO Category
    (name)
VALUES(N'Giày Dép Nữ');
INSERT INTO Category
    (name)
VALUES(N'Túi Ví Nam');
INSERT INTO Category
    (name)
VALUES(N'Đồng Hồ');
INSERT INTO Category
    (name)
VALUES(N'Thiết Bị Âm Thanh');
INSERT INTO Category
    (name)
VALUES(N'Thực phẩm và đồ uống');
INSERT INTO Category
    (name)
VALUES(N'Chăm Sóc Thú Cưng');
INSERT INTO Category
    (name)
VALUES(N'Mẹ &amp; Bé');
INSERT INTO Category
    (name)
VALUES(N'Thời trang trẻ em &amp; trẻ sơ sinh');
INSERT INTO Category
    (name)
VALUES(N'Gaming &amp; Console');
INSERT INTO Category
    (name)
VALUES(N'Cameras &amp; Flycam');
INSERT INTO Category
    (name)
VALUES(N'Nhà cửa &amp; Đời sống');
INSERT INTO Category
    (name)
VALUES(N'Thể Thao &amp; Dã Ngoại');
INSERT INTO Category
    (name)
VALUES(N'Văn Phòng Phẩm');
INSERT INTO Category
    (name)
VALUES(N'Sở thích &amp; Sưu tầm');
INSERT INTO Category
    (name)
VALUES(N'Ô tô');
INSERT INTO Category
    (name)
VALUES(N'Mô tô, xe máy');
INSERT INTO Category
    (name)
VALUES(N'Voucher &amp; Dịch vụ');
INSERT INTO Category
    (name)
VALUES(N'Sách &amp; Tạp Chí');
INSERT INTO Category
    (name)
VALUES(N'Máy tính &amp; Laptop');
INSERT INTO Category
    (name)
VALUES(N'Deal Gần bạn');

-- Level 2
-- Thời Trang Nữ (31 - 50)
INSERT INTO Category
VALUES(1, N'Áo');
INSERT INTO Category
VALUES(1, N'Quần');
INSERT INTO Category
VALUES(1, N'Quần đùi');
INSERT INTO Category
VALUES(1, N'Váy');
INSERT INTO Category
VALUES(1, N'Quần jeans');
INSERT INTO Category
VALUES(1, N'Đầm');
INSERT INTO Category
VALUES(1, N'Váy cưới');
INSERT INTO Category
VALUES(1, N'Đồ liền thân');
INSERT INTO Category
VALUES(1, N'Áo khoác');
INSERT INTO Category
VALUES(1, N'Áo len');
INSERT INTO Category
VALUES(1, N'Hoodie và Áo nỉ');
INSERT INTO Category
VALUES(1, N'Bộ');
INSERT INTO Category
VALUES(1, N'Đồ lót');
INSERT INTO Category
VALUES(1, N'Đồ ngủ');
INSERT INTO Category
VALUES(1, N'Đồ Bầu');
INSERT INTO Category
VALUES(1, N'Đồ truyền thống');
INSERT INTO Category
VALUES(1, N'Đồ hóa trang');
INSERT INTO Category
VALUES(1, N'Khác');
INSERT INTO Category
VALUES(1, N'Vải');
INSERT INTO Category
VALUES(1, N'Vớ/ Tất');

-- Level 3
-- Áo (51 - 58)
INSERT INTO Category
VALUES(31, N'Áo hai dây và ba lỗ');
INSERT INTO Category
VALUES(31, N'Áo ống');
INSERT INTO Category
VALUES(31, N'Áo thun');
INSERT INTO Category
VALUES(31, N'Áo sơ mi');
INSERT INTO Category
VALUES(31, N'Áo polo');
INSERT INTO Category
VALUES(31, N'Áo liền thân');
INSERT INTO Category
VALUES(31, N'Khác');


use shop
select * from Category
select * from Single_Product_Page
select * from Product


INSERT INTO Single_Product_Page
VALUES(1, 51, 1, N'Mũ Nón Miki Kiểu Thủy Thủ Không Vành Miki Hat DEGEEN DOMOG 2', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 52, 3, N'nón Beanie vành tròn phong cách Retro Hàn Quốc Nam/Nữ', '',3);
INSERT INTO Single_Product_Page
VALUES(1, 53, 2, N'Mũ nón Miki kiểu Thủy Thủ Không Vành Founded 1986 N04', '',4);
INSERT INTO Single_Product_Page
VALUES(1, 54, 1, N'Mũ thủy thủ không vành vải canvas loại 1 nhiều màu phong cách hiphop M01', '',3);
INSERT INTO Single_Product_Page
VALUES(1, 55, 2, N'Áo khoác nữ', '',4);
INSERT INTO Single_Product_Page
VALUES(1, 56, 3, N'Sửa chữa nhà cửa', '',3);
INSERT INTO Single_Product_Page
VALUES(1, 57, 3, N'Ống Kính - Ống Ngắm', '',1);


INSERT INTO Single_Product_Page
VALUES(1, 51, 1, N'Cá, thuỷ hải sản', '',2);
INSERT INTO Single_Product_Page
VALUES(1, 52, 3, N'Combo 2 hộp chia ngăn sắp xếp quần áo phong cách Nhật Bản VINAVU - Có Nắp - Kem Trơn', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 53, 2, N'Áo thun hình gấu teddy cho chó mèo ( một cái, màu giao ngẫu nhiên ) - XXL', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 54, 1, N'Bộ bàn ăn mặt đá ceramic bóng kết hợp ghế Nelson - Bàn 1m4 + 4 ghế', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 55, 2, N'Hộp vải đựng quần áo SETHOME đa năng giỏ đựng đồ lót sách vở đồ cá nhân thùng đựng mỹ phẩm cao cấp dễ dang gấp gọn - Chữ nhật - Be', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 56, 3, N'Bộ bàn ăn mặt mặt đá cẩm thạch nhân tạo kết hợp 4 ghế 6 ghế 8 ghế Nelson - Bàn 1m4 + 4 ghế - Ghế màu trắng ghi', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 57, 3, N'Mũ đi biển vành tròn gắn tag chư M nón móc len sợi rộng vành đi chơi siêu đẹp dành cho nữ.', '',1);

INSERT INTO Single_Product_Page
VALUES(1, 51, 1, N'Nón Beanie vành tròn ️ Mũ tròn phong cách Retro Hàn Quốc form Unisex nam nữ N04', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 52, 3, N'Mũ tròn Miki màu trơn phong cách cổ điển độc đáo – thêu chữ kiểu dáng đơn giản', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 53, 2, N'Mũ nón bucket nam nữ trơn tròn vành nhiều màu siêu đẹp MN20', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 54, 1, N'Điện thoại Samsung Galaxy S22 Ultra 5G (12GB/512GB) - Hàng Chính Hãng', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 55, 2, N'Tã Quần Huggies Dry Tràm Trà Tự Nhiên Gói Cực Đại XL62/XXL56 + Tặng 6 miếng', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 56, 3, N'Combo 2 TúI Nước Giặt Omo Matic Cho Máy Giặt Cửa Trước Bền Đẹp Bền Màu Sau 100 Lần Giặt 3.6Kg', '',1);
INSERT INTO Single_Product_Page
VALUES(1, 57, 3, N'Apple iPhone 11', '',1);

--Single_Product_Page=1
INSERT INTO Product
VALUES(1, N'Mũ Nón Miki Kiểu Thủy Thủ Không Vành Loại D', 100, 1, 51.900, 'https://salt.tikicdn.com/cache/400x400/ts/product/0f/60/eb/dee9d336357c6dc31111173633eb1b17.PNG');
INSERT INTO Product
VALUES(1, N'Mũ Nón Miki Kiểu Thủy Thủ Không Vành Loại C', 100, 1, 61.900, 'https://salt.tikicdn.com/cache/w1200/ts/product/7e/44/a0/c33afe0467aefe0629846abae3a9ba76.PNG');
INSERT INTO Product
VALUES(1, N'Mũ Nón Miki Kiểu Thủy Thủ Không Vành Loại B', 100, 1, 71.900, 'https://prices.vn/storage/photo/product/mu-non-miki-kieu-thuy-thu-khong-vanh-miki-hat-degeen-domog-2.png');
INSERT INTO Product
VALUES(1, N'Mũ Nón Miki Kiểu Thủy Thủ Không Vành Loại A', 100, 1, 81.900, 'https://vn-test-11.slatic.net/p/1338ca544ce72cd9838866b0c2c1da62.jpg');

--Single_Product_Page=2
INSERT INTO Product
VALUES(2, N'nón Beanie Loại D', 100, 1, 52.900, 'https://cf.shopee.vn/file/b8f5947811ac89b25b403b886e85fb85');
INSERT INTO Product
VALUES(2, N'nón Beanie Loại C', 100, 1, 62.900, 'https://salt.tikicdn.com/cache/400x400/ts/product/62/7e/c3/eb970de7928b70cd28f6bf6ba1d05b8a.jpg');
INSERT INTO Product
VALUES(2, N'nón Beanie Loại B', 100, 1, 72.900, 'https://salt.tikicdn.com/cache/525x525/ts/product/f2/14/70/d8dc2060343127892cbc7c330058f381.jpg');
INSERT INTO Product
VALUES(2, N'nón Beanie Loại A', 100, 1, 82.900, 'https://cf.shopee.vn/file/6c3c90bc8f504a6e12345d16ae17c28c');

--Single_Product_Page=3
INSERT INTO Product
VALUES(3, N'Mũ Nón Miki Loại D', 100, 1, 53.900, 'https://salt.tikicdn.com/cache/400x400/ts/product/0f/60/eb/dee9d336357c6dc31111173633eb1b17.PNG');
INSERT INTO Product
VALUES(3, N'Mũ Nón Miki Loại C', 100, 1, 63.900, 'https://salt.tikicdn.com/cache/w1200/ts/product/7e/44/a0/c33afe0467aefe0629846abae3a9ba76.PNG');
INSERT INTO Product
VALUES(3, N'Mũ Nón Miki Loại B', 100, 1, 73.900, 'https://prices.vn/storage/photo/product/mu-non-miki-kieu-thuy-thu-khong-vanh-miki-hat-degeen-domog-2.png');
INSERT INTO Product
VALUES(3, N'Mũ Nón Miki Loại A', 100, 1, 83.900, 'https://vn-test-11.slatic.net/p/1338ca544ce72cd9838866b0c2c1da62.jpg');

--Single_Product_Page=4
INSERT INTO Product
VALUES(4, N'Mũ thủy thủ không vành Loại D', 100, 1, 54.900, 'https://salt.tikicdn.com/cache/400x400/ts/product/0f/60/eb/dee9d336357c6dc31111173633eb1b17.PNG');
INSERT INTO Product
VALUES(4, N'Mũ thủy thủ không vành Loại C', 100, 1, 64.900, 'https://salt.tikicdn.com/cache/w1200/ts/product/7e/44/a0/c33afe0467aefe0629846abae3a9ba76.PNG');
INSERT INTO Product
VALUES(4, N'Mũ thủy thủ không vành Loại B', 100, 1, 74.900, 'https://prices.vn/storage/photo/product/mu-non-miki-kieu-thuy-thu-khong-vanh-miki-hat-degeen-domog-2.png');
INSERT INTO Product
VALUES(4, N'Mũ thủy thủ không vành Loại A', 100, 1, 84.900, 'https://vn-test-11.slatic.net/p/1338ca544ce72cd9838866b0c2c1da62.jpg');

--Single_Product_Page=5
INSERT INTO Product
VALUES(5, N'Áo khoác nữ Loại D', 100, 1, 55.900, 'https://annshop.vn/wp-content/uploads/14881-vvvv.png');
INSERT INTO Product
VALUES(5, N'Áo khoác nữ Loại C', 100, 1, 65.900, 'https://media3.scdn.vn/img3/2019/5_3/R9i8FI_simg_de2fe0_500x500_maxb.jpg');
INSERT INTO Product
VALUES(5, N'Áo khoác nữ Loại B', 100, 1, 75.900, 'https://bumshop.com.vn/wp-content/uploads/2019/06/shop-ao-khoac-nu-dep-tphcm-1.jpg');
INSERT INTO Product
VALUES(5, N'Áo khoác nữ Loại A', 100, 1, 85.900, 'https://quanaoxuongmay.com/wp-content/uploads/13136-clean-z2087169383359-5f33b1da3f66b1480f4093f6a1320590.jpg');

INSERT INTO Product
VALUES(6, N'Mũ Nón Miki Kiểu Thủy Thủ Không Vành Loại D', 100, 1, 106.900, 'https://prices.vn/storage/photo/product/mu-non-miki-kieu-thuy-thu-khong-vanh-miki-hat-degeen-domog-2.png');

--Single_Product_Page=7
INSERT INTO Product
VALUES(7, N'Ống Kính - Ống Ngắm Loại D', 100, 1, 67.900, 'https://dientukhietan.com/wp-content/uploads/2020/08/2020-07-29_0-50-16.jpg');
INSERT INTO Product
VALUES(7, N'Ống Kính - Ống Ngắm Loại C', 100, 1, 77.900, 'https://media.loveitopcdn.com/3040/upload/images/ong-ngam-sung-hoi-1512795599.jpg');
INSERT INTO Product
VALUES(7, N'Ống Kính - Ống Ngắm Loại B', 100, 1, 87.900, 'http://upload2.webbnc.vn/uploadv2/web/67/6703/product/2017/06/15/07/12/1497510699_148637085251.jpg');
INSERT INTO Product
VALUES(7, N'Ống Kính - Ống Ngắm Loại A', 100, 1, 107.900, 'https://vn-test-11.slatic.net/p/b30332e6d104b83c5e2b5eea59c8d394.jpg_340x340q80.jpg');

INSERT INTO Product
VALUES(8, N'Cá, thuỷ hải sản', 100, 1, 100.900, 'https://haisanthanglong.com/upload/photo/untitled-122-88820.png');
INSERT INTO Product
VALUES(9, N'Combo 2 hộp chia ngăn sắp xếp quần áo phong cách Nhật Bản VINAVU - Có Nắp - Kem Trơn', 100, 1, 850000.900, 'https://salt.tikicdn.com/ts/product/e1/68/94/fc902ed4e684fd4bdc49ad7093d7f757.png');
INSERT INTO Product
VALUES(10, N'Áo thun hình gấu teddy cho chó mèo ( một cái, màu giao ngẫu nhiên ) - XXL', 100, 1, 1850000.900, 'https://salt.tikicdn.com/cache/w1200/ts/product/a1/5b/56/52f2cdc3c39526d91fcb149d7497f93b.jpeg');
INSERT INTO Product
VALUES(11, N'Bộ bàn ăn mặt đá ceramic bóng kết hợp ghế Nelson - Bàn 1m4 + 4 ghế', 100, 1, 550000.900, 'https://noithatgiakho.com/upload/sanpham/large/bo-ban-an-mat-da-ceramic-bong-ket-hop-ghe-spot-229-1.jpg');
INSERT INTO Product
VALUES(12, N'Hộp vải đựng quần áo SETHOME đa năng giỏ đựng đồ lót sách vở đồ cá nhân thùng đựng mỹ phẩm cao cấp dễ dang gấp gọn - Chữ nhật - Be', 100, 1, 750000.900, 'https://cf.shopee.vn/file/261cad5954be11b9ba8d414d9e64528c');
INSERT INTO Product
VALUES(13, N'Bộ bàn ăn mặt mặt đá cẩm thạch nhân tạo kết hợp 4 ghế 6 ghế 8 ghế Nelson - Bàn 1m4 + 4 ghế - Ghế màu trắng ghi', 100, 1, 350000.900, 'https://cf.shopee.vn/file/b68f5acafc4a6e7a4675ac222a6adb88');
INSERT INTO Product
VALUES(14, N'Mũ đi biển vành tròn gắn tag chư M nón móc len sợi rộng vành đi chơi siêu đẹp dành cho nữ.', 100, 1, 1250000.900, 'https://i2.wp.com/noli.vn/wp-content/uploads/2019/06/Hoc-cach-moc-mu-vanh-cup-no-lien-cua-tac-gia-nha-nha.jpg?fit=800%2C696&ssl=1');
INSERT INTO Product
VALUES(15, N'Nón Beanie vành tròn ️ Mũ tròn phong cách Retro Hàn Quốc form Unisex nam nữ N04', 100, 1, 1150000.900, 'https://vn-test-11.slatic.net/p/d8a1826b67bb5613fdf6fd41a2a4a821.jpg');
INSERT INTO Product
VALUES(16, N'Mũ tròn Miki màu trơn phong cách cổ điển độc đáo – thêu chữ kiểu dáng đơn giản', 100, 1, 750000.900, 'https://image.voso.vn/users/vosoimage/images/30ca1625c5f340b2b6730ffa5c17107a?t%5B0%5D=compress%3Alevel%3D100&accessToken=f8601762a34874664a8a88a0e62c93ec0a945e912d995b23a22664e477200af5');
INSERT INTO Product
VALUES(17, N'Mũ nón bucket nam nữ trơn tròn vành nhiều màu siêu đẹp MN20', 100, 1, 950000.900, 'https://salt.tikicdn.com/cache/w1200/ts/product/79/52/12/d9400a324f0a49903e4b8d21c6335bc7.jpg');
INSERT INTO Product
VALUES(18, N'Điện thoại Samsung Galaxy S22 Ultra 5G (12GB/512GB) - Hàng Chính Hãng', 100, 1, 550000.900, 'https://cdn.hoanghamobile.com/i/preview/Uploads/2022/02/09/image-removebg-preview-10.png');
INSERT INTO Product
VALUES(19, N'Tã Quần Huggies Dry Tràm Trà Tự Nhiên Gói Cực Đại XL62/XXL56 + Tặng 6 miếng', 100, 1, 500000.900, 'https://salt.tikicdn.com/ts/product/5f/15/80/aa7a5cfdaae91b2925bcd8c71fbbb639.jpg');
INSERT INTO Product
VALUES(20, N'Combo 2 TúI Nước Giặt Omo Matic Cho Máy Giặt Cửa Trước Bền Đẹp Bền Màu Sau 100 Lần Giặt 3.6Kg', 100, 1, 670000.900, 'https://salt.tikicdn.com/media/catalog/producttmp/14/48/9a/fb20ea3ebbb029046f92d83391114c50.jpg');

--Single_Product_Page=21
INSERT INTO Product
VALUES(21, N'Apple iPhone 11 màu xanh', 100, 1, 1210000, 'https://24hstore.vn/upload_images/images/SEO/iphone-11-mau-xanh-phien-ban-mau-sac-ban-chay-nhat-2020-4.jpg');
INSERT INTO Product
VALUES(21, N'Apple iPhone 11 màu đỏ', 100, 1, 1220000, 'https://cdn.tgdd.vn/Files/2021/01/31/1324283/iphone-12-mini-128gb-282320-042317_800x533.jpg');
INSERT INTO Product
VALUES(21, N'Apple iPhone 11 màu vàng', 100, 1, 1230000, 'https://cdn.tgdd.vn/Files/2019/09/11/1197017/yellow_980x551-800-resize.jpg');
INSERT INTO Product
VALUES(21, N'Apple iPhone 11 màu hồng', 100, 1, 1240000, 'https://ss-images.saostar.vn/pc/1596849920066/iphone-12.jpg');



select * from Order_Item
select * from Product
--INSERT INTO Order_Item VALUES(1, 1, 1,1);
--INSERT INTO Order_Item VALUES(1, 1, 1,1);
--INSERT INTO Order_Item VALUES(1, 1, 1,1);
--INSERT INTO Order_Item VALUES(1, 1, 1,1);
--INSERT INTO Order_Item VALUES(1, 1, 1,1);
--INSERT INTO Order_Item VALUES(1, 1, 1,1);
--INSERT INTO Order_Item VALUES(1, 1, 1,1);
--INSERT INTO Order_Item VALUES(1, 1, 1,1);
--INSERT INTO Order_Item VALUES(1, 1, 1,1);

--INSERT INTO Order_Item VALUES(1, 1, 2,1);
--INSERT INTO Order_Item VALUES(1, 1, 3,1);
--INSERT INTO Order_Item VALUES(1, 1, 4,1);
--INSERT INTO Order_Item VALUES(1, 1, 5,1);
--INSERT INTO Order_Item VALUES(1, 1, 6,1);

-- FUNCTION

use shop
select * from product where id_product > 48

SELECT * FROM Single_Product_Page where id_single_product_page > 5

--select * from Verification_Token
select * from ACCOUNT
select * from Customer
select * from Evaluate
select * from Evaluate_Reply
select * from Shop
select * from Role
--CREATE TABLE Evaluate_Reply
--(
--    id_evaluate_reply int IDENTITY(1,1) ,
--    id_evaluate int FOREIGN KEY REFERENCES Evaluate (id_evaluate),
--    id_shop int FOREIGN KEY REFERENCES Shop (id_shop),
--    date_create datetime,
--    date_update datetime,
--    content nvarchar(max),
--    PRIMARY KEY (id_evaluate_reply)
--)
--insert into Evaluate_Reply values(3,1,GETDATE(),GETDATE(),N'em xin cảm ơn ạ');
--insert into Evaluate_Reply values(4,1,GETDATE(),GETDATE(),N'em xin cảm ơn ạ');
--delete from Customer
--delete from Cart_Item
--delete from Order_Item
--select *
--from Reset_Email_Token
--delete from Reset_Email_Token
--select *
--from Product
--select * from Wallet_Customer
--delete from Wallet_Customer

UPDATE Customer
SET img_url = 'url(https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png)'
WHERE id_customer = 1;

use shop
select * from ACCOUNT
select * from shop
	
select * from Addrress
select * from Addrress_Cell


--delete from shop where id_shop = 2
--delete from Addrress where id = 'shop2'
UPDATE Customer
SET img_url = 'url(https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png)'
WHERE id_customer = 2;
SELECT * FROM Order_Item o JOIN Product p on  o.id_product = p.id_product 
						   JOIN Single_Product_Page spg on spg.id_single_product_page = p.id_single_product_page
		WHERE spg.id_shop =  1 AND o.status = 1
