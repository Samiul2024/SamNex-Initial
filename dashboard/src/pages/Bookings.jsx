import { useEffect, useState } from "react"

import { getBookings } from "../services/bookingService"

const Bookings = () => {
  const [bookings, setBookings] =
    useState([])

  const admin = JSON.parse(
    localStorage.getItem("admin")
  )

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data =
          await getBookings(admin.token)

        setBookings(data.bookings)
      } catch (error) {
        console.log(error)
      }
    }

    fetchBookings()
  }, [])

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-black">
          Client Bookings
        </h1>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full">
          <thead className="bg-secondary">
            <tr>
              <th className="p-4 text-left">
                Client
              </th>

              <th className="p-4 text-left">
                Project
              </th>

              <th className="p-4 text-left">
                Budget
              </th>

              <th className="p-4 text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking._id}
                className="border-t border-white/10"
              >
                <td className="p-4">
                  <div>
                    <h3 className="font-bold">
                      {booking.fullName}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {booking.email}
                    </p>
                  </div>
                </td>

                <td className="p-4">
                  {booking.projectType}
                </td>

                <td className="p-4">
                  {booking.budget}
                </td>

                <td className="p-4">
                  <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-sm text-yellow-400">
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bookings