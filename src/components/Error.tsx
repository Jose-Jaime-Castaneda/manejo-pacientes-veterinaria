export default function Error({ children }: { children: React.ReactNode }) {
    return (
        <p className=" text-center bg-red-600 text-white font-bold p-3 uppercase text-sm rounded-b-full">
            {children}
        </p>
    );
};