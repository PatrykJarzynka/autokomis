<script setup lang="ts">
import {computed, ref} from "vue";

  interface FileInterface {
    name: string;
    url: string;
  }

  const allowedFileTypes = ['image/jpeg','image/gif','image/png','image/jpg'];
  const localFiles = ref<FileInterface[]>([]);
  const isDragging = ref<boolean>(false);

  const numberOfGridRows = computed(() => {
    return Math.ceil(localFiles.value.length / 4);
  })

  function handleDragEnter(event: DragEvent): void {
    isDragging.value = true;
  }

  function handleDragLeave(event: DragEvent): void {
    isDragging.value = false;
  }

  function handleDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  function handleDrop(event: DragEvent): void {
    const fileList = event.dataTransfer?.files;
    if (fileList) {
      previewFiles(fileList)
    }
    event.preventDefault();
  }

  function previewFiles(files: FileList): void {
    for (const file of files) {
      if (!allowedFileTypes.includes(file.type)) {
        return
      } else {
        localFiles.value.push({
          name: file.name,
          url: URL.createObjectURL(file)
        })
      }
    }
  }

  function handleUploadClick(): void {
    let input = document.createElement('input');
    input.type = 'file';
    input.click();
  }


</script>

<template>
    <div
        class="drag-drop-container"
        @dragenter="handleDragEnter"
        @dragleave="handleDragLeave"
        @drop="handleDrop"
        @dragover="handleDragOver"
    >
      <div
          v-if="!localFiles.length"
          class="no-uploaded-images-container"
      >
        <div
            v-if="!isDragging"
            class="no-drag"
        >
          <v-btn
              class="upload-imgs-btn"
              @click="handleUploadClick"
          >
            {{'Dodaj zdjęcia'}}
          </v-btn>

          <p>lub upuść tutaj</p>
        </div>

        <div v-else>
          <p>Upuść pliki tutaj</p>
        </div>
      </div>




      <div
          v-else
          class="preview-container"
      >
        <v-img
            class="main-img preview-img"
            :src="localFiles[0].url"
            cover
        />

        <v-img
            v-for="file in localFiles.slice(1,localFiles.length)"
            class="preview-img"
            :src="file.url"
            cover
        />

      </div>
    </div>
</template>

<style scoped lang="scss">
@import '../../utils/colors';

$numberOfGridRows: v-bind(numberOfGridRows);

.drag-drop-container{
  display: flex;
  justify-content: center;
  border: 3px dashed grey;
  min-height: 320px;
}

.input-file {
  padding-bottom: 20px;
}

.preview-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat($numberOfGridRows, 150px);
  gap: 10px;
  padding: 10px;

  .main-img {
    grid-column: 1/3;
    grid-row:1/3;
  }

  .main-img::after {
    content:"Zdjęcie główne";
    width: fit-content;
    height: 20px;
    background-color: $accentColor;
    color: $defaultColor;
    position: absolute;
    bottom: 0;
    padding-inline: 5px;
    border-radius: 5px;
  }

  .preview-img {
    border: 2px solid $primaryColor;
    border-radius: 10px;
  }
}

.no-uploaded-images-container {
  display: flex;
  align-items: center;

  .no-drag {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
}

.upload-imgs-btn {
  background-color: $secondaryColor;
  color: white;
}

</style>