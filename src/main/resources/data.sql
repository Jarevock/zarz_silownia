INSERT INTO silownia (SILOWNIAID, LOKALIZACJA) VALUES
(1, 'Warszawa'),(2, 'Krakow'),(4, 'Poznan');

INSERT INTO KLIENT (KLIENTID, IMIE, NAZWISKO, EMAIL, CZLONKOSTWO, PAKIET, SILOWNIAID) VALUES
(1, 'Jaroslaw','Kedziorek','jakistam@gmail.com',TRUE,2,1);



INSERT INTO SPRZET (ID,NAZWA, KATEGORIA, STATUS, SILOWNIAID) VALUES
(1,'Hantle',1,1,1);