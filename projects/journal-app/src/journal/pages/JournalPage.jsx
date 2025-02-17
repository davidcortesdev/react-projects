import { useDispatch, useSelector } from 'react-redux';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views/NoteView';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { startNewNote } from '../../store/journal';
import '../../styles.css';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector(state => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {active ? <NoteView /> : <NothingSelectedView />}
      <button 
        className="new-note-button" 
        disabled={isSaving} 
        onClick={onClickNewNote}
      >
        +
      </button>
    </JournalLayout>
  );
};
