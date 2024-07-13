package com.example.springboot.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    
    @NotBlank
    @Size(max = 75)
    private String email;

    @NotBlank
    @Size(max = 25)
    private String password;
}
