import scss from "./Loading.module.scss";
import { FC } from "react";

const PreLoaderDevX: FC = () => {
  return (
    <>
      <div className={scss.preLoader}>
        <p className={scss.title_loader}>
          <img
            src="https://i.pinimg.com/originals/f9/0f/76/f90f7689233948005f465d98ead56d44.gif"
            alt=""
          />
        </p>
        <span className={scss.loader}></span>
      </div>
    </>
  );
};
export default PreLoaderDevX;
