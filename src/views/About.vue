<script setup lang="ts">
import image from "@/assets/images/headquarters.jpg";
</script>

<template>
  <div id="about">
    <section>
      <div class="title">
        <h1>
          A DWC foi criada em 2012 com foco na prestação de serviços de
          usinagem, fresadora convencional e retifica plana
        </h1>
      </div>
      <div class="content">
        <p class="text">
          Ao longo dos últimos 10 anos, a empresa cresceu, evoluiu e se
          reinventou como fabricante de moldes e matrizes, aumentando sua
          infraestrutura, estrutura de maquinas e dobrando a quantidade de
          colaboradores.
        </p>
        <p class="text">
          Com a missão de fornecer produtos de alta qualidade com muito
          comprometimento, sigilo e responsabilidade, acompanhamos todas as
          mudanças no mercado e em suas tecnologias, oferecendo capacidade
          produtiva, aliada a um bom prazo de entrega em projetos que demandam
          agilidade.
        </p>
      </div>
    </section>
    <section>
      <img :src="image" alt="" />
    </section>
  </div>
</template>

<style scoped lang="scss">
#about {
  > section {
    max-width: 600px;
    margin: {
      left: auto;
      right: auto;
    }
  }

  .title {
    margin-bottom: size(1);
  }

  .content {
    display: flex;
    flex-direction: column;
    row-gap: size(2);
  }
}
</style>
