// Button.types.ts
export interface ButtonProps {
  /**
   * The text to display inside the button.
   */
  label: string;

  /**
   * Function to handle button click events.
   */
  onClick: () => void;

  /**
   * Disables the button if true.
   * Defaults to false.
   */
  disabled?: boolean;
}
