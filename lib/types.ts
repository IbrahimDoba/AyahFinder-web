export interface WaitlistFormData {
  email: string;
  source: string; // How did you hear about us?
  interest: string; // What interests you most?
}

export interface LifetimeOfferFormData {
  email: string;
  name?: string;
}

export interface ApiResponse<T = void> {
  success: boolean;
  message: string;
  data?: T;
}
