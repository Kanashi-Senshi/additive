import { Loader } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader className="w-8 h-8 animate-spin text-blue-500" />
    </div>
  );
}