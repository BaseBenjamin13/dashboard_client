import toast, { Toaster } from 'react-hot-toast';

export default function toastMsg(success, message) {
    if (success) {
        toast.success(message,
            {
                duration: 2700,
                style: {
                    fontSize: 24,
                    color: '#4cceac',
                    backgroundColor: '#434957'
                }
            }
        );
    } else {
        toast.error(message,
            {
                duration: 2700,
                style: {
                    fontSize: 24,
                }
            }
        );
    }
}