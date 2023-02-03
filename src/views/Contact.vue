<script setup lang="ts">
import { Container, TextImage } from "@ui";
import logo from "@/assets/images/logo.png";
</script>

<template>
  <div id="contato">
    <Container>
      <section>
        <TextImage :image="logo" text="texto">
          <template #title> 3529-8485 | 9 9775-9973 </template>
          <template #subtitle> dwc@dwc.ind.br </template>
          Rua Novo Hamburgo, 277
          <br />
          Bairro Oeste / Sapiranga - RS CEP: 93804-556
        </TextImage>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6934.977979710287!2d-51.037723361171665!3d-29.647581676464977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95194091057bcf21%3A0xc82faed8269a01df!2sDWC%20Metal%C3%BArgica!5e0!3m2!1spt-BR!2sbr!4v1670951061848!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
    </Container>
  </div>
</template>
