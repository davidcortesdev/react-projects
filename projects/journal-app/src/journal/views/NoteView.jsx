import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { ImageGallery } from '../components/ImageGallery';
import '../../styles.css';

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState, dispatch]);

  useEffect(() => {
    if(messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if(target.files.length === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <div className="note-view fade-in">
      <div className="note-header">
        <span className="note-date">{dateString}</span>
        <div className="note-actions">
          <input 
            type="file"
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            className="file-input"
          />
          <button className="action-button" onClick={() => fileInputRef.current.click()} disabled={isSaving}>
            Subir
          </button>
          <button className="action-button" onClick={onSaveNote} disabled={isSaving}>
            Guardar
          </button>
        </div>
      </div>

      <div className="note-content">
        <input 
          type="text"
          className="note-title"
          placeholder="Añade un título"
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <textarea 
          className="note-body"
          placeholder="¿Qué hiciste durante este mes?"
          name="body"
          value={body}
          onChange={onInputChange}
          rows={5}
        ></textarea>
      </div>

      <div className="note-footer">
        <button className="delete-button" onClick={onDelete}>
          Borrar
        </button>
      </div>

      <ImageGallery images={note.imageUrls} />
    </div>
  );
};
