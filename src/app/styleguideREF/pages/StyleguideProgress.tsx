import {FunctionComponent} from 'react';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {
  StepProgress,
  StepProgressStep,
} from '@/components/ui/StepProgress/StepProgress';

const ALL_STATUS_STEPS: StepProgressStep[] = [
  {status: 'completed', title: 'Lorem'},
  {status: 'failure', title: 'Ipsum'},
  {status: 'skipped', title: 'Dolor'},
  {status: 'current', title: 'Sit'},
  {status: 'pending-available', title: 'Lorem'},
  {status: 'pending', title: 'Consectetur'},
];

export const StyleguideProgress: FunctionComponent = () => {
  return (
    <>
      <StyleguideTitle>Progress display</StyleguideTitle>

      <StyleguideSection title="Step progress">
        <StepProgress steps={ALL_STATUS_STEPS} />
      </StyleguideSection>
    </>
  );
};
