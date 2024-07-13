package com.example.springboot.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.models.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, UUID>{

    public UserModel findByEmailAndPassword(String email, String password);

}
