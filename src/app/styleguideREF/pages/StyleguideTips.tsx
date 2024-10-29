import {FunctionComponent} from 'react';
import {StyleguideTitle} from '@/styleguide/components/StyleguideLayout';
import {TutorialTip} from '@/components/ui/TutorialTip/TutorialTip';
import {Button} from '@/components/ui/Button/Button';
import {useTutorialTips} from '@/context/tutorial-tips';

export const StyleguideTips: FunctionComponent = () => {
  const {resetTips} = useTutorialTips();

  return (
    <>
      <StyleguideTitle>Tips</StyleguideTitle>

      <Button onClick={() => resetTips()}>Reset tips</Button>

      <div className="flex flex-1 gap-4">
        <TutorialTip
          id="tip-1"
          title="Tip #1"
          content={<>Foo bar</>}
          focusClassName="border-primary"
          delay={100}
        >
          <div className="p-6 border rounded">Tip 1 (simple)</div>
        </TutorialTip>

        <TutorialTip
          id="tip-2"
          title="Tip #2"
          content={<>Foo bar</>}
          focusClassName="border-primary"
          className="w-[400px]"
          image="https://placehold.co/600x400/EEE/31343C"
        >
          <div className="p-6 border rounded">Tip 2 (with image)</div>
        </TutorialTip>

        <TutorialTip
          id="tip-3"
          title="Tip #3"
          content={<>Foo bar</>}
          focusClassName="border-primary"
          delay={500}
        >
          <div className="p-6 border rounded">Tip 3 (with 500ms delay)</div>
        </TutorialTip>

        <TutorialTip
          id="tip-4"
          title="Tip #4"
          content={<>Foo bar</>}
          focusClassName="border-primary"
          focus={false}
        >
          <div className="p-6 border rounded">Tip 4 (no focus overlay)</div>
        </TutorialTip>
      </div>
    </>
  );
};
