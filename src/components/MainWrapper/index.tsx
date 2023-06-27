import { PropsWithChildren } from "react";

export default function MainWrapper(props: PropsWithChildren) {
  return <main className='h-screen bg-[#09090b] pt-16'>{props.children}</main>;
}
