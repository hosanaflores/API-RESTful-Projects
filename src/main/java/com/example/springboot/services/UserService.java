package com.example.springboot.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot.models.UserModel;
import com.example.springboot.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    public UserModel save (UserModel userModel){
        return userRepository.save(userModel);
    }

    public UserModel findByEmailAndPassword(String email, String password){
        return userRepository.findByEmailAndPassword(email, password);
    }
    
}
