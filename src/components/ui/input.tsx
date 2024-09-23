import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: any;
  errorMessage?: string | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, isError, errorMessage, type, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            "focus-visible:outline-btn-primary text-black flex h-10 w-full border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
            isError ? "border-error rounded-none" : "border-input rounded-md",
            className
          )}
          ref={ref}
          {...props}
        />
        {isError && (
          <div className="text-xs p-2 bg-error-foreground text-error">
            <span>{errorMessage}</span>
          </div>
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
