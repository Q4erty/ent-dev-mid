package com.example.ormapi;

import jakarta.persistence.*;
import lombok.*;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    @Column(nullable = false)
    private String status;
}
