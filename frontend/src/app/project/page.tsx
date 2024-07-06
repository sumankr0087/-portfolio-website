// // 'use client'
// // import axios from 'axios'
// // import Link from 'next/link'
// // import React, { useEffect, useState } from 'react'
// // import { toast } from "react-hot-toast"
// // import EditProject from './EditProjectModal'
// // import AddProject from './AddProject'

// // export default function ProjectPage() {
// //     const [projects, setProjects] = useState([])
// //     const [selectedProject, setSelectedProject] = useState(null)

// //     const fetchProjects = async () => {
// //         try {
// //             const res = await axios.get("http://127.0.0.1:8000/api/projects/")
// //             setProjects(res.data)
// //             console.log("Fetch success", res.data);
// //         } catch (error: any) {
// //             console.log("Fetch failed");
// //             toast.error(error.message)
// //         }
// //     }

// //     useEffect(() => {
// //         fetchProjects()
// //     }, [])

// //     const handleEditClick = (project:any) => {
// //         setSelectedProject(project)
// //     }

// //     const handleEditClose = () => {
// //         setSelectedProject(null)
// //     }

// //     const handleEditSuccess = () => {
// //         fetchProjects()
// //     }

// //     return (
// //         <div className='flex flex-col items-center justify-center min-h-screen py-2'>
// //             <div className="">
// //                 <h1 className="flex justify-center text-3xl font-semibold mb-2 text-[#D9D9D9]">
// //                     Projects
// //                 </h1>
// //                 <p className="flex justify-center text-base text-[#D9D9D9]">Things I've built so far</p>
// //             </div>
// //             <div className='grid grid-cols-3 gap-4 mt-8'>
// //                 {projects.map((proj: any) => (
// //                     <div key={proj.id} className='bg-gray-800 rounded'>
// //                         <img src={proj.image} alt='image' className='h-[15rem] border-b' />
// //                         <h2 className="text-base flex justify-center py-4 font-medium text-[#D9D9D9]">{proj.title}</h2>
// //                         <p className='text-sm font-normal px-4 pb-4 text-[#D9D9D9]'>{proj.description}</p>
// //                         <div className='text-sm font-normal px-4 pb-4 text-[#D9D9D9]'>
// //                             <span className='text-sm font-medium'>Tech Stack : </span>{proj.tech_stack}
// //                         </div>
// //                         <div className='flex justify-center mb-4'>
// //                         <button
// //                             onClick={() => handleEditClick(proj)}
// //                             className='px-4 py-1 bg-blue-600 text-white rounded-md'>
// //                             Update
// //                         </button>
// //                         </div>

// //                     </div>
// //                 ))}
// //             </div>
// //             {selectedProject && (
// //                 <EditProject
// //                     project={selectedProject}
// //                     onClose={handleEditClose}
// //                     onEdit={handleEditSuccess}
// //                 />
// //             )}
// //         </div>
// //     )
// // }

// 'use client'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { toast } from "react-hot-toast"
// import EditProject from './EditProjectModal'
// import AddProjectForm from './AddProject'

// export default function ProjectPage() {
//     const [projects, setProjects] = useState([])
//     const [selectedProject, setSelectedProject] = useState(null)
//     const [showAddForm, setShowAddForm] = useState(false)

//     const fetchProjects = async () => {
//         try {
//             const res = await axios.get("http://127.0.0.1:8000/api/projects/")
//             setProjects(res.data)
//             console.log("Fetch success", res.data);
//         } catch (error: any) {
//             console.log("Fetch failed");
//             toast.error(error.message)
//         }
//     }

//     useEffect(() => {
//         fetchProjects()
//     }, [])

//     const handleEditClick = (project: any) => {
//         setSelectedProject(project)
//     }

//     const handleEditClose = () => {
//         setSelectedProject(null)
//     }

//     const handleEditSuccess = () => {
//         fetchProjects()
//     }

//     const handleAddClick = () => {
//         setShowAddForm(true)
//     }

//     const handleAddClose = () => {
//         setShowAddForm(false)
//     }

//     const handleAddSuccess = () => {
//         fetchProjects()
//     }

//     return (
//         <div className='flex flex-col items-center justify-center min-h-screen py-2'>
//             <div className='flex flex-row'>
//             <div className="">
//                 <h1 className="flex justify-center text-3xl font-semibold mb-2 text-[#D9D9D9]">
//                     Projects
//                 </h1>
//                 <p className="flex justify-center text-base text-[#D9D9D9]">Things I've built so far</p>
//             </div>
//             <div className="flex justify-end mb-4 ml-4">
//                 <button onClick={handleAddClick} className="px-2  bg-green-600 text-white rounded-md">
//                     Add Project
//                 </button>
//             </div>
//             </div>

//             <div className='grid grid-cols-3 gap-4 mt-8'>
//                 {projects.map((proj: any) => (
//                     <div key={proj.id} className='bg-gray-800 rounded'>
//                         <img src={proj.image} alt='image' className='h-[15rem] border-b' />
//                         <h2 className="text-base flex justify-center py-4 font-medium text-[#D9D9D9]">{proj.title}</h2>
//                         <p className='text-sm font-normal px-4 pb-4 text-[#D9D9D9]'>{proj.description}</p>
//                         <div className='text-sm font-normal px-4 pb-4 text-[#D9D9D9]'>
//                             <span className='text-sm font-medium'>Tech Stack : </span>{proj.tech_stack}
//                         </div>
//                         <div className='flex justify-center mb-4'>
//                             <button
//                                 onClick={() => handleEditClick(proj)}
//                                 className='px-4 py-1 bg-blue-600 text-white rounded-md'>
//                                 Update
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {selectedProject && (
//                 <EditProject
//                     project={selectedProject}
//                     onClose={handleEditClose}
//                     onEdit={handleEditSuccess}
//                 />
//             )}
//             {showAddForm && (
//                 <AddProjectForm
//                     onClose={handleAddClose}
//                     onAdd={handleAddSuccess}
//                 />
//             )}
//         </div>
//     )
// }

'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from "react-hot-toast"
import EditProject from './EditProjectModal'
import AddProjectForm from './AddProject'

export default function ProjectPage() {
    const [projects, setProjects] = useState([])
    const [selectedProject, setSelectedProject] = useState(null)
    const [showAddForm, setShowAddForm] = useState(false)
    const [selectedProjectDetails, setSelectedProjectDetails] = useState(null)

    const fetchProjects = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/projects/")
            setProjects(res.data)
            console.log("Fetch success", res.data);
        } catch (error: any) {
            console.log("Fetch failed");
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    const handleEditClick = (project: any) => {
        setSelectedProject(project)
    }

    const handleEditClose = () => {
        setSelectedProject(null)
    }

    const handleEditSuccess = () => {
        fetchProjects()
    }

    const handleAddClick = () => {
        setShowAddForm(true)
    }

    const handleAddClose = () => {
        setShowAddForm(false)
    }

    const handleAddSuccess = () => {
        fetchProjects()
    }

    const handleProjectDetailsClick = async (projectId: any) => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/projects/${projectId}/`)
            setSelectedProjectDetails(res.data)
        } catch (error) {
            toast.error('Failed to fetch project details');
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <div className='flex flex-row'>
                <div className="">
                    <h1 className="flex justify-center text-3xl font-semibold mb-2 text-[#D9D9D9]">
                        Projects
                    </h1>
                    <p className="flex justify-center text-base text-[#D9D9D9]">Things I've built so far</p>
                </div>
                <div className="flex justify-end mb-4 ml-4">
                    <button onClick={handleAddClick} className="px-2  bg-green-600 text-white rounded-md">
                        Add Project
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 mt-8'>
                {projects.map((proj: any) => (
                    <div key={proj.id} className='bg-gray-800 rounded' onClick={() => handleProjectDetailsClick(proj.id)}>
                        <img src={proj.image} alt='image' className='h-[15rem] border-b' />
                        <h2 className="text-base flex justify-center py-4 font-medium text-[#D9D9D9]">{proj.title}</h2>
                        <p className='text-sm font-normal px-4 pb-4 text-[#D9D9D9]'>{proj.description}</p>
                        <div className='text-sm font-normal px-4 pb-4 text-[#D9D9D9]'>
                            <span className='text-sm font-medium'>Tech Stack : </span>{proj.tech_stack}
                        </div>
                        <div className='flex justify-center mb-4'>
                            <button
                                onClick={() => handleEditClick(proj)}
                                className='px-4 py-1 bg-blue-600 text-white rounded-md'>
                                Update
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProjectDetails && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white text-black p-8 rounded-lg shadow-lg w-96">
                        <img src={selectedProjectDetails.image} alt='image' className='h-[15rem] border-b' />

                        <h2 className="text-2xl font-semibold mb-4">{selectedProjectDetails.title}</h2>
                        <p className="text-sm mb-4">{selectedProjectDetails.description}</p>
                        <div className="text-sm font-normal mb-4">
                            <span className="font-medium">Tech Stack: </span>{selectedProjectDetails.tech_stack}
                        </div>
                        <button onClick={() => setSelectedProjectDetails(null)} className="px-4 py-2 bg-gray-300 rounded-md">
                            Close
                        </button>
                    </div>
                </div>
            )}

            {selectedProject && (
                <EditProject
                    project={selectedProject}
                    onClose={handleEditClose}
                    onEdit={handleEditSuccess}
                />
            )}

            {showAddForm && (
                <AddProjectForm
                    onClose={handleAddClose}
                    onAdd={handleAddSuccess}
                />
            )}
        </div>
    )
}
