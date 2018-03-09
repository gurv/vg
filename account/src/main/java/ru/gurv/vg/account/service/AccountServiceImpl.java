package ru.gurv.vg.account.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import ru.gurv.vg.account.client.AuthServiceClient;
import ru.gurv.vg.account.domain.Account;
import ru.gurv.vg.account.domain.User;
import ru.gurv.vg.account.repository.AccountRepository;

import java.util.Date;

@Service
public class AccountServiceImpl implements AccountService {

	private final Logger log = LoggerFactory.getLogger(getClass());

	@Autowired
	private AuthServiceClient authClient;

	@Autowired
	private AccountRepository repository;

	@Override
	public Account findByName(String accountName) {
		Assert.hasLength(accountName, "must have length");
		return repository.findByName(accountName);
	}

	@Override
	public Account create(User user) {

		Account existing = repository.findByName(user.getUserName());
		Assert.isNull(existing, "account already exists: " + user.getUserName());

		authClient.createUser(user);

		Account account = new Account();
		account.setName(user.getUserName());
		account.setLastSeen(new Date());

		repository.save(account);

		log.info("new account has been created: " + account.getName());

		return account;
	}

	@Override
	public void saveChanges(String name, Account update) {

		Account account = repository.findByName(name);
		Assert.notNull(account, "can't find account with name " + name);

		account.setNote(update.getNote());
		account.setLastSeen(new Date());
		repository.save(account);

		log.debug("account {} changes has been saved", name);
	}

}
