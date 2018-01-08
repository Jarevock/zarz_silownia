package pl.kedziorek.silka.silownia.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "SILOWNIA")
@Getter
@Setter
@NoArgsConstructor
public class Silownia {
    @Id
    @Column(name ="SILOWNIAID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long silowniaID;

    @Column(name ="LOKALIZACJA")
    private Integer silownialocal;
}

