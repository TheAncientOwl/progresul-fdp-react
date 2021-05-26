import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/navbar';

const theme = {
  primary: '#50E627',
  secondary: '#36991A',
  nav: {
    background: '#131313',
    title: {
      gradient: {
        col1: '#062601',
        col2: '#318c18',
      },
    },
  },
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ minHeight: '150vh' }}>
          <Navbar />
          <div style={{ padding: '20px', width: '100%' }}>
            Cele mai importante criterii pentru clasificarea capitalului tehnic sunt: -modul în care acesta participă la
            activitatea economică; -cum se consumă; -cum se înlocuiesc cu noile procese de producție. În baza acestor
            criterii, capitalul se împarte în: a) capital fix; b) capital circulant. CAPITALUL FIX - este acea parte a
            capitalului format din bunuri (clădiri, mașini, utilaje, instalații, etc.) care participă la mai multe
            cicluri (acte) de producție, se consumă treptat și se înlocuiesc după mai mulți ani de utilizare. Consumul
            treptat al capitalului fix își găsește expresia în uzură, aceasta prezentadu-se în două forme: a) uzură
            fizică; b) uzură morală (involuntară). UZURA FIZICĂ - se manifestă prin deprecierea treptată a
            caracteristicilor funcționale ale capitalului fix ca urmare a folosirii productive și acțiunii agenților
            naturali. UZURA MORALĂ - apare sub incidența progresului tehnic și a condițiilor pieței care asigură mașini,
            utilaje noi, mai ieftine decât cele în funcțiune și/sau cu performanțe tehnico-economice superioare.
            CAPITALUL CIRCULANT - este partea capitalului formată din bunuri (materii prime, material, combustibil,
            energia consumată în procesul de producție, apă tehnologică, etc) care participă la un singur ciclu de
            producție, sunt consumate sau transformate în cursul acestuia și trebuie înlocuite cu fiecare nou ciclu de
            producție.
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
