import { collapseCloseClass } from "../consts/index";

export const handleCollapse = ({
  e,
  collapseClassName,
}: {
  e: React.MouseEvent<HTMLDivElement, MouseEvent>;
  collapseClassName: string;
}) => {
  e.preventDefault();

  const targets = document.getElementsByClassName(
    collapseClassName
  ) as HTMLCollectionOf<HTMLElement>;

  if (targets[0].classList.contains(collapseCloseClass)) {
    Array.from(targets).forEach((e) => e.classList.remove(collapseCloseClass));

    return;
  }

  Array.from(targets).forEach((e) => {
    e.classList.add(collapseCloseClass);
  });
};
