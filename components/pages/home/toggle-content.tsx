"use client";
import { useId, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
    children: React.ReactNode;
    heading: string;
  }

  export default function HomeToggleCard(props: Props) {
    const id = useId();
    const [isClose, setIsClose] = useState<boolean>(true);
    return (
      <div className="toggle-content">
        <label className='flex justify-between items-center font-bold cursor-pointer' htmlFor={`toggle-control-${id}`}>
          {props.heading}
          <FontAwesomeIcon
            icon={faCircleChevronDown}
            className={`
              text-brand
              w-6 h-6
              transition-transform duration-300 transform ${isClose ? 'rotate-0' : '-rotate-180'}
            `}
          />
          <input type="checkbox" name="toggle-control" className='hidden' id={`toggle-control-${id}`} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsClose(!e.target.checked)} />
        </label>
        <div className={`
          whitespace-pre-wrap
          overflow-hidden
          transition-all duration-300
          ${isClose ? 'max-h-0 opacity-0' : 'max-h-fit opacity-100 pt-6'}
        `}>{props.children}</div>
      </div>
    )
  }