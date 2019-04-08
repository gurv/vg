package ru.gurv.vg.account.service;

import ru.gurv.vg.account.domain.Account;
import ru.gurv.vg.account.domain.User;

public interface AccountService {

	Account findByName(String accountName);

	Account create(User user);

	void saveChanges(String name, Account update);

}
