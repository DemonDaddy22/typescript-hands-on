type ApiResponse<T> = T extends Error ? { success: false; error: T } : { success: true; data: T };

type SuccessResponse = ApiResponse<{ id: number; name: string }>;
type ErrorResponse = ApiResponse<SyntaxError>;
