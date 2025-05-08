const imageInput = document.getElementById('imageInput');
    const preview = document.getElementById('preview');

    imageInput.addEventListener('change', () => {
      // Limpar o preview anterior
      preview.innerHTML = '';

      // Obter o arquivo selecionado
      const file = imageInput.files[0];
      if (file) {
        // Criar um objeto URL para o arquivo
        const fileURL = URL.createObjectURL(file);

        // Criar elemento de imagem
        const img = document.createElement('img');
        img.src = fileURL;
        img.alt = 'Pré-visualização da imagem';

        // Adicionar a imagem ao preview
        preview.appendChild(img);
      } else {
        preview.innerHTML = '<p>Nenhuma imagem carregada</p>';
      }
    });