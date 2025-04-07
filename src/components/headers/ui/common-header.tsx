import { cn } from "@/lib/utils";
import { headerHeight } from "../utils/const";

type CommonHeaderProps = {
  /** `false`인 경우 공간 할당 안함 */
  left?: React.ReactNode | false;
  /** `false`인 경우 공간 할당 안함 */
  center?: React.ReactNode | false;
  /** `false`인 경우 공간 할당 안함 */
  right?: React.ReactNode | false;
  shadow?: boolean;
  /** @default true */
  sticky?: boolean;
  subHeader?: React.ReactNode;
};

function CommonHeader({ left, center, right, subHeader, shadow, sticky = true }: CommonHeaderProps) {
  return (
    <HeaderWrap sticky={sticky}>
      <MainWrap shadow={shadow}>
        {left !== false && <LeftWrap>{left}</LeftWrap>}
        {center !== false && <CenterWrap>{center}</CenterWrap>}
        {right !== false && <RightWrap>{right}</RightWrap>}
      </MainWrap>

      {subHeader}
    </HeaderWrap>
  );
}

export default CommonHeader;

type HeaderWrapProps = {
  children: React.ReactNode;
  sticky: boolean;
};
function HeaderWrap({ children, sticky }: HeaderWrapProps) {
  return (
    <header
      className={cn("top-0 z-10 bg-white", {
        sticky: sticky,
      })}
    >
      {children}
    </header>
  );
}

type MainWrapProps = {
  shadow?: boolean;
  children: React.ReactNode;
};
function MainWrap({ children, shadow }: MainWrapProps) {
  return (
    <div
      className={cn("grid auto-cols-[minmax(min-content,1fr)] grid-flow-col items-center gap-1 px-[16px] py-[8px]", {
        "shadow-sm": shadow,
      })}
      style={{ height: `${headerHeight}px` }}
    >
      {children}
    </div>
  );
}

function LeftWrap({ children }: React.PropsWithChildren) {
  return <div className="flex items-center justify-start gap-2">{children}</div>;
}

function CenterWrap({ children }: React.PropsWithChildren) {
  return <div className="flex items-center justify-center">{children}</div>;
}

function RightWrap({ children }: React.PropsWithChildren) {
  return <div className="flex items-center justify-end gap-2">{children}</div>;
}
