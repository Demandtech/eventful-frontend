import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: any;
  errorMessage?: string | undefined;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, isError, errorMessage, label, type, ...props }, ref) => {
    return (
      <>
        <Label className={isError ? "text-error" : ""}>{label}</Label>
        <input
          type={type}
          className={cn(
            "focus-visible:outline-btn-primary text-black flex h-10 w-full bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
            isError
              ? "border-error rounded-none border-2"
              : "border-input rounded-md border",
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
