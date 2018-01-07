package pl.kedziorek.silka.silownia.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "SPRZET")
@Getter
@Setter
@NoArgsConstructor

public class Sprzet {
    @Id
    @Column(name ="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long sprzetId;

    @Column(name ="NAZWA")
    private String sprzetNazwa;

    @Column(name ="KATEGORIA")
    private int sprzetKategoria;

    @Column(name ="STATUS")
    private int sprzetStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SILOWNIA ID")
    private Silownia silownia;
}
