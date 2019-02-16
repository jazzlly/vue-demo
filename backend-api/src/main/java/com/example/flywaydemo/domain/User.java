package com.example.flywaydemo.domain;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * Created by rajeevkumarsingh on 20/08/17.
 */
@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(unique = true)
    @Size(min = 1, max = 100)
    private String username;

    @NotBlank
    @Size(max = 50)
    private String firstName;

    @Size(max = 50)
    private String lastName;
}
