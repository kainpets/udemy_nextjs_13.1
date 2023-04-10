export default function AuthModalInputs() {
    return (
        <div>
            <div className="my-3 flex justify-between text-sm">
                <input type="text" className="border rounded py-2 py-3 w=[49%]" placeholder="First Name"></input>
                <input type="text" className="border rounded py-2 py-3 w=[49%]" placeholder="Last Name"></input>
            </div>
            <div className="my-3 flex justify-between text-sm">
            <input type="text" className="border rounded py-2 py-3 w=full" placeholder="E-mail"></input>
            </div>
            <div className="my-3 flex justify-between text-sm">
                <input type="text" className="border rounded py-2 py-3 w=[49%]" placeholder="Phone"></input>
                <input type="text" className="border rounded py-2 py-3 w=[49%]" placeholder="City"></input>
            </div>
            <div className="my-3 flex justify-between text-sm">
            <input type="text" className="border rounded py-2 py-3 w-full" placeholder="Password"></input>
            </div>
        </div>
    )
}