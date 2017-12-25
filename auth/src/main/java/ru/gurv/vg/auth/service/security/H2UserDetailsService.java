package ru.gurv.vg.auth.service.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.gurv.vg.auth.domain.User;
import ru.gurv.vg.auth.repository.UserRepository;

import java.util.Optional;

@Service
public class H2UserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<User> user = repository.findById(username);

		if (!user.isPresent()) {
			throw new UsernameNotFoundException(username);
		}

		return user.get();
	}

}
