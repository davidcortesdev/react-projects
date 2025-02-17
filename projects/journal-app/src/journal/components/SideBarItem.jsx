import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';
import '../../styles.css';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  return (
    <li className="sidebar-item" onClick={onClickNote}>
      <div className="sidebar-item-icon">&#9733;</div>
      <div className="sidebar-item-content">
        <span className="sidebar-item-title">{newTitle}</span>
        <span className="sidebar-item-body">{body}</span>
      </div>
    </li>
  );
};

SideBarItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.number,
  imageUrls: PropTypes.array,
};
