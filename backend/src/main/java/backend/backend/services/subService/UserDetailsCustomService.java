package backend.backend.services.subService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import backend.backend.persitence.entities.Account;
import backend.backend.persitence.model.UserDetailCustom;
import backend.backend.persitence.repository.AccountRepository;
import backend.backend.persitence.repository.RefreshTokenRepository;

@Service
public class UserDetailsCustomService implements UserDetailsService {
	@Autowired
	AccountRepository userRepository;
	@Autowired
	RefreshTokenRepository refreshTokenRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account user = userRepository.findByEmail(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + username));
		return UserDetailCustom.build(user);
	}
}
