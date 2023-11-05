import React, { useState } from 'react';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('1'); // Catégorie par défaut
  const [tags, setTags] = useState([]);
  const [coverImage, setCoverImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleTagsChange = (event) => {
    const selectedTags = Array.from(event.target.selectedOptions, (option) => option.value);
    setTags(selectedTags);
  }

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire vers le serveur ou effectuer d'autres actions
    console.log({ title, content, category, tags, coverImage });
  }

  return (
    <div className='contact'>
      <h1 className='contact__title'>Formulaire de Publication d'Article</h1>
      <form onSubmit={handleSubmit}>
        <div className='contact__form'>
          <label className='contact__form__label' htmlFor="title">Titre de l'article</label>
          <input
            className='contact__form__label'
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className='contact__form'>
          <label className='contact__form__label' htmlFor="content">Contenu de l'article</label>
          <textarea
          className='contact__form__label'
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>

        <div className='contact__form'>
          <label className='contact__form__label' htmlFor="category">Catégorie de l'article</label>
          <select
          className='contact__form__label'
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="1">Technologie</option>
            <option value="2">Voyages</option>
            <option value="3">Cuisine</option>
            {/* Ajoutez d'autres options de catégories ici */}
          </select>
        </div>

        <div className='contact__form'>
          <label className='contact__form__label' htmlFor="tags">Tags de l'article (maintenez Ctrl pour sélectionner plusieurs)</label>
          <select
          className='contact__form__label'
            id="tags"
            multiple
            value={tags}
            onChange={handleTagsChange}
          >
            <option value="1">Techno</option>
            <option value="2">Voyage</option>
            <option value="3">Cuisine</option>
            <option value="4">Santé</option>
            <option value="5">Football</option>
            <option value="6">Musique</option>
            {/* Ajoutez d'autres options de tags ici */}
          </select>
        </div>

        <div className='contact__form'>
          <label className='contact__form__label' htmlFor="coverImage">Image de couverture de l'article</label>
          <input
          className='contact__form__label'
            type="file"
            id="coverImage"
            accept="image/*"
            onChange={handleCoverImageChange}
          />
        </div>
        <div className='contact__form'>
            <button className='contact__form__label' type="submit">Publier l'article</button>
        </div>
      </form>
    </div>
  );
}

export default ArticleForm;
