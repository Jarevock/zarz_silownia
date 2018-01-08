package pl.kedziorek.silka.silownia.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "KLIENT")
@Getter
@Setter
@NoArgsConstructor
public class Klient {


    @Id
    @Column(name ="KLIENTID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long klientId;

    @Column(name ="IMIE")
    private String klientImie;

    @Column(name ="NAZWISKO")
    private String klientNazwisko;

    @Column(name ="EMAIL")
    private String klientEmail;

    @Column(name ="CZLONKOSTWO")
    private Boolean klientCzlonkostwo;

    @Column(name ="PAKIET")
    private Integer klientPakiet;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "SILOWNIAID")
    private Silownia silownia;
}
