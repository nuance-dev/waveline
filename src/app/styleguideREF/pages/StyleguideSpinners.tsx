import {FunctionComponent, useState} from 'react';
import upperFirst from 'lodash/upperFirst';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {
  SpinnerSize,
  SpinnerColor,
  SpinnerAlignment,
  Spinner,
} from '@/components/ui/Spinner/Spinner';
import {IconEye, IconEyeClosed} from '@tabler/icons-react';

const COLORS: SpinnerColor[] = ['glass', 'primary', 'bright'];

const SIZES: SpinnerSize[] = ['large', 'default', 'small'];

const ALIGNMENTS: SpinnerAlignment[] = ['center', 'left'];

export const StyleguideSpinners: FunctionComponent = () => (
  <>
    <StyleguideTitle>Spinners</StyleguideTitle>

    {COLORS.map((color) => (
      <SpinnerSection color={color} key={color} />
    ))}

    <div className="flex gap-6">
      {ALIGNMENTS.map((align) => (
        <StyleguideSection
          className="flex-1"
          key={align}
          title={`Align: ${align}`}
        >
          <Spinner align={align} className="my-2" size="large" />
        </StyleguideSection>
      ))}
    </div>
  </>
);

const SpinnerSection: FunctionComponent<{color: SpinnerColor}> = ({color}) => {
  const [show, setShow] = useState(true);
  const ToggleIcon = show ? IconEye : IconEyeClosed;

  return (
    <StyleguideSection
      key={color}
      title={
        <span className="flex gap-2 items-center">
          Color: {color}
          <button className="text-primary" onClick={() => setShow(!show)}>
            <ToggleIcon size={20} stroke={1.5} />
          </button>
        </span>
      }
    >
      <div className="flex gap-4">
        {SIZES.map((size) => (
          <div
            key={size}
            className="space-y-1 border bg-glass-darker rounded-lg py-4 w-28 h-28 text-center justify-center flex flex-col mt-1"
          >
            <h2 className="text-muted mb-2">{upperFirst(size)}</h2>

            <Spinner size={size} color={color} show={show} />
          </div>
        ))}
      </div>
    </StyleguideSection>
  );
};
