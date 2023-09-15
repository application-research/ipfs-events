import { Collapsable } from './Collapsable';

export default function Collapsables({ collapsables }) {
  return (
    <div style={{ display: 'grid', rowGap: '1rem' }}>
      {collapsables?.map((collapsable, index) => {
        return <Collapsable {...collapsable} key={index} />;
      })}
    </div>
  );
}
