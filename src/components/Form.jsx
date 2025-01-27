import React, { useState } from "react";
import axios from "axios"; // Import axios

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        gender: "",
        college: "",
        course: "",
        batch: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.mobile.trim()) newErrors.mobile = "Mobile Number is required";
        else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email address";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.college.trim()) newErrors.college = "College is required";
        if (!formData.course.trim()) newErrors.course = "Course is required";
        if (!formData.batch.trim()) newErrors.batch = "Batch is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true); // Set submitting to true
            try {
                // Send the form data to the API using axios
                const response = await axios.post("", formData);
                if (response.status === 200) {
                    alert("Form submitted successfully!");
                    // Store the form data in localStorage after successful submission
                    localStorage.setItem("formData", JSON.stringify(formData));

                    // Reset form after successful submission
                    setFormData({
                        fullName: "",
                        mobile: "",
                        email: "",
                        gender: "",
                        college: "",
                        course: "",
                        batch: "",
                    });
                    setErrors({});
                } else {
                    alert("There was an issue with the form submission. Please try again.");
                }
            } catch (error) {
                alert("An error occurred while submitting the form. Please try again.");
            } finally {
                setIsSubmitting(false); // Reset submitting state
            }
        }
    };

    return (
        <>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="max-w-lg mx-auto mt-[100px] p-6 shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Build with AI Registration Form</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                            disabled={isSubmitting} // Disable input while submitting
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile Number</label>
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.mobile ? "border-red-500" : "border-gray-300"}`}
                            disabled={isSubmitting}
                        />
                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            disabled={isSubmitting}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.gender ? "border-red-500" : "border-gray-300"}`}
                            disabled={isSubmitting}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">College</label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.college ? "border-red-500" : "border-gray-300"}`}
                            disabled={isSubmitting}
                        />
                        {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Course</label>
                        <input
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.course ? "border-red-500" : "border-gray-300"}`}
                            disabled={isSubmitting}
                        />
                        {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Batch</label>
                        <input
                            type="text"
                            name="batch"
                            value={formData.batch}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${errors.batch ? "border-red-500" : "border-gray-300"}`}
                            disabled={isSubmitting}
                        />
                        {errors.batch && <p className="text-red-500 text-sm mt-1">{errors.batch}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        disabled={isSubmitting} // Disable submit button while submitting
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </>
    );
}
