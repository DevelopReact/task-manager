// react
import { FC } from 'react';
//ui
import { Checkbox } from '@/shared/ui';
//assets
import ArrowUpFilter from '@/shared/libs/assets/svg/arrow-up-filter.svg?react';
import ArrowDownFilter from '@/shared/libs/assets/svg/arrow-down-filter.svg?react';
import FilterOnIcon from '@/shared/libs/assets/svg/filter-on-icon.svg?react';
import FilterOffIcon from '@/shared/libs/assets/svg/filter-off-icon.svg?react';
// styles
import styles from './TaskFilterPanel.module.scss';

interface TaskFilterPanelProps {
  filterActive: boolean;
  resetFilters: () => void;
  deadlineFilterActive: boolean;
  setDeadlineFilterActive: (deadlineFilterCheck: boolean) => void;
  checkboxFilterActive: boolean;
  setCheckboxFilterActive: (checkboxFilterCheck: boolean) => void;
  tagsTasksList: string[];
  setSelectedTag: (setSelect: string | null) => void;
  tagSelectRef: React.RefObject<HTMLSelectElement>;
}

export const TaskFilterPanel: FC<TaskFilterPanelProps> = ({
  filterActive,
  resetFilters,
  deadlineFilterActive,
  setDeadlineFilterActive,
  checkboxFilterActive,
  setCheckboxFilterActive,
  tagsTasksList,
  setSelectedTag,
  tagSelectRef
}) => {
  return (
    <div className={styles.TaskFilterPanel}>
      <div className={styles.taskFilterSection}>
        <div className={`${styles.taskFilter} ${styles.checkboxFilter}`}>
          <Checkbox
            active={checkboxFilterActive}
            onClick={() => setCheckboxFilterActive(!checkboxFilterActive)}
          />
        </div>
      </div>
      <div
        className={`${styles.taskFilter} ${styles.titleFilter}`}
        onClick={resetFilters}
      >
        {filterActive ? <FilterOffIcon /> : <FilterOnIcon />}
      </div>
      <div className={styles.taskFilterSection}>
        <div
          className={`${styles.taskFilter} ${styles.deadlineFilter}`}
          onClick={() => setDeadlineFilterActive(!deadlineFilterActive)}
        >
          {deadlineFilterActive ? <ArrowUpFilter /> : <ArrowDownFilter />}
        </div>
        <div className={`${styles.taskFilter} ${styles.tagFilter}`}>
          <select
            ref={tagSelectRef}
            onChange={(e) => setSelectedTag(e.target.value || null)}
          >
            <option value=''></option>
            {tagsTasksList.map((tag: string, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
