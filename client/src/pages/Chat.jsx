import { Box } from "@mui/material";
import ChatSidebar from "../components/ChatSidebar";

function Chat() {
  return (
    <Box className="flex flex-1 overflow-hidden">
      <Box
        className="flex flex-shrink-0 border-r border-gray-200 dark:border-gray-700"
        sx={{ position: 'relative', userSelect: 'auto', width: '256px', height: '100%', maxWidth: '400px', minWidth: '200px', boxSizing: 'border-box', flexShrink: '0' }}
      >
        <ChatSidebar />
        <Box>
          <Box sx={{ position: 'absolute', userSelect: 'none', width: '10px', height: '100%', top: '0px', cursor: 'col-resize', right: '-5px' }}></Box>
        </Box>
      </Box>
      <Box className="flex-1 flex flex-col overflow-hidden transition-all duration-300 ">
        <Box className="flex-1 overflow-auto">
          <Box className="flex h-full overflow-hidden bg-light-sidebar dark:bg-dark-header">
            <Box
              className="flex flex-col border-r border-gray-300 dark:border-gray-700 bg-light-sidebar dark:bg-dark-header"
              sx={{ position: 'relative', userSelect: 'auto', width: '500px', height: '100%', maxWidth: '800px', minWidth: '400px', boxSizing: 'border-box', flexShrink: '0' }}
            >
              <Box className="flex-1 flex items-center justify-center p-4">
                <Box className="w-full max-w-2xl mx-auto">
                  <Box className="w-full h-full flex flex-col justify-center p-2 sm:p-4 space-y-2 sm:space-y-4 overflow-hidden">
                    <h1 className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-gray-200">
                      What can we help you with?
                    </h1>
                    <input className="hidden" type="file" />
                    <Box className="relative rounded-lg shadow-sm sm:shadow-md bg-light-sidebar dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <Box className="flex">
                        <textarea
                          className="w-full py-1 sm:py-3 px-2 sm:px-4 text-[16px] sm:text-base text-gray-800 dark:text-gray-200 bg-transparent focus:outline-none resize-none overflow-hidden "
                          placeholder="Type your message..."
                          rows="1"
                          sx={{ minHeight: '24px', maxHeight: '150px', fontSize: '16px', height: '48px' }}
                        ></textarea>
                        <Box className="flex items-start p-1 sm:p-2">
                          <button className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4 sm:w-5 sm:h-5"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                            </svg>
                          </button>
                          <button
                            disabled=""
                            className="p-1 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4 sm:w-5 sm:h-5"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line x1="22" y1="2" x2="11" y2="13"></line>
                              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                          </button>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="p-2 sm:p-8 rounded-lg sm:rounded-xl border-2 flex flex-col items-center justify-center space-y-1 sm:space-y-3 transition-all duration-200 border-gray-300 dark:border-gray-600 border-dashed bg-gray-50/50 dark:bg-gray-800/50">
                      <Box className="p-1 sm:p-3 rounded-full bg-blue-100/50 dark:bg-blue-900/30">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="w-3 h-3 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                      </Box>
                      <p className="text-[0.7rem] sm:text-lg font-medium text-gray-700 dark:text-gray-300">
                        Drag and drop files here
                      </p>
                      <p className="text-[0.6rem] sm:text-sm text-gray-500 dark:text-gray-400">
                        Upload NDA And Upload Lease Aggrement
                      </p>
                      <button className="mt-1 sm:mt-2 px-2 py-0.5 sm:px-4 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-[0.6rem] sm:text-sm font-medium transition-colors">
                        Or select files
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box sx={{ position: 'absolute', userSelect: 'none', width: '10px', height: '100%', top: '0px', cursor: 'col-resize', right: '-5px' }}></Box>
              </Box>
            </Box>
            <Box className="flex flex-col flex-grow h-full overflow-hidden">
              <Box
                className="flex-1 overflow-y-auto"
                sx={{ scrollbarWidth: 'none' }}
              >
                <Box className="w-full h-full p-3 sm:p-4 lg:p-6 overflow-y-auto">
                  <Box className="min-h-[calc(100vh-150px)] flex flex-col items-center justify-center">
                    <Box className="text-gray-600 dark:text-gray-400 text-center text-sm sm:text-sm">
                      Your responses will appear here
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;
