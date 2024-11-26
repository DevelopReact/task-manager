// react
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
//thunks
import { getTags } from '@/entities/tags/model/thunks/tagThunks';
//selectors
import { getTagState } from '@/entities/tags/model/selectors/tagSelectors';
//ui
import { Error, Tag } from '@/shared/ui';
import { Loader } from '@/shared/ui/Loader/Loader';
//lib
import { useDispatch } from '@/shared/libs/hooks/useDispatch';
// styles
import styles from './Tags.module.scss';
import { ITag } from '../../model/types/tagTypes';

interface TagsProps {
  selectedTag: string;
  setSelectedTag: (selectedTag: string) => void;
  error?: {
    message?: string;
  };
}

export const Tags: FC<TagsProps> = ({ setSelectedTag, selectedTag, error }) => {
  const { tags, isLoading, error: tagError } = useSelector(getTagState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTags);
  }, []);

  const onSelectTagClick = (title: string) => {
    setSelectedTag(title);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (tagError) {
    return <Error error={tagError} />;
  }

  return (
    <div className={styles.Tags}>
      <div className={styles.wrapperTags}>
        {tags.map((tag: ITag) => (
          <Tag
            backgroundColor={tag.title}
            onClick={() => {
              onSelectTagClick(tag.title);
            }}
            active={selectedTag === tag.title}
            key={tag.id}
          >
            {tag.title}
          </Tag>
        ))}
      </div>
      {error && <span className={styles.errorTags}>{error.message}</span>}
    </div>
  );
};
