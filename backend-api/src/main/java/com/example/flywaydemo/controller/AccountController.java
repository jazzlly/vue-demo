package com.example.flywaydemo.controller;

import com.example.flywaydemo.domain.Account;
import com.example.flywaydemo.domain.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AccountController {

    @Autowired
    AccountRepository accountRepository;

    @PostMapping("")
    public ResponseEntity addAccount(@RequestBody @Validated Account account) {
        if (accountRepository.findByEmail(account.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Account already created!");
        }

        accountRepository.save(account);
        return ResponseEntity.ok("");
    }
}
