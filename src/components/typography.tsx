import { cn } from "@/utility/cn";
import { ReactNode } from "react";

export const H1Hero = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-[55px] leading-[121%] tracking-[-3%] font-[700] text-center",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H1Grey = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-[60px] leading-[121%] tracking-[-3%] font-[700] text-center",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-[40px] leading-[144%] tracking-[-3%] font-[400]",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const H5 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h5
      className={cn(
        "text-[24px] leading-[144%] tracking-[-3%] font-[400]",
        className
      )}
    >
      {children}
    </h5>
  );
};

export const H7 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h6
      className={cn(
        "text-[21px] leading-[150%] tracking-[-4%] font-[350]",
        className
      )}
    >
      {children}
    </h6>
  );
};

export const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-[18px] leading-[150%] tracking-[-3%] font-[350]",
        className
      )}
    >
      {children}
    </p>
  );
};
