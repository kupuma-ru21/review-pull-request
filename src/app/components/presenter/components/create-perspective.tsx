import { css } from '@/styled-system/css';

const DOM_ID = 'create-perspective';

const CreatePerspective = () => (
  <form>
    <label className={css({ fontWeight: 'bold', cursor: 'pointer' })} htmlFor={DOM_ID}>
      create perspective
      <input
        id={DOM_ID}
        name={DOM_ID}
        type="text"
        className={css({
          borderColor: 'Highlight', borderWidth: 'medium', borderRadius: 'md', ml: '1.5', width: 'xl',
        })}
      />
      {/* TODO: add preview ui for input */}
    </label>
    <button
      type="submit"
      className={css({
        ml: '1.5', bgColor: 'blue.300', padding: 1, borderRadius: '8px', cursor: 'pointer',
      })}
    >
      create
    </button>
  </form>
);

export default CreatePerspective;
