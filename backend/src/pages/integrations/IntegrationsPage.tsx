import React, { createElement } from 'react';
import { PlusIcon, CheckCircleIcon, XCircleIcon, AlertCircleIcon, CodeIcon, BarChartIcon, SearchIcon } from 'lucide-react';
const IntegrationsPage = () => {
  const integrations = [{
    id: 1,
    name: 'Google Analytics',
    icon: <BarChartIcon size={24} />,
    status: 'connected',
    details: 'UA-12345678-1'
  }, {
    id: 2,
    name: 'Google Search Console',
    icon: <SearchIcon size={24} />,
    status: 'connected',
    details: 'example.com'
  }, {
    id: 3,
    name: 'Yandex Metrica',
    icon: <BarChartIcon size={24} />,
    status: 'disconnected',
    details: ''
  }, {
    id: 4,
    name: 'Facebook Pixel',
    icon: <CodeIcon size={24} />,
    status: 'connected',
    details: '123456789012345'
  }, {
    id: 5,
    name: 'Hotjar',
    icon: <BarChartIcon size={24} />,
    status: 'error',
    details: 'Configuration error'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Integrations</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <PlusIcon size={16} className="mr-2" />
          Add Integration
        </button>
      </div>
      {/* Integrations List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-3">
          <h2 className="text-lg font-medium text-gray-900">
            Connected Services
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {integrations.map(integration => <div key={integration.id} className="p-6 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-full">
                  {integration.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {integration.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    {integration.status === 'connected' && <>
                        <CheckCircleIcon size={16} className="text-green-500 mr-1" />
                        <span className="text-sm text-green-500">
                          Connected
                        </span>
                        {integration.details && <span className="text-sm text-gray-500 ml-2">
                            ({integration.details})
                          </span>}
                      </>}
                    {integration.status === 'disconnected' && <>
                        <XCircleIcon size={16} className="text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">
                          Disconnected
                        </span>
                      </>}
                    {integration.status === 'error' && <>
                        <AlertCircleIcon size={16} className="text-red-500 mr-1" />
                        <span className="text-sm text-red-500">Error</span>
                        {integration.details && <span className="text-sm text-gray-500 ml-2">
                            ({integration.details})
                          </span>}
                      </>}
                  </div>
                </div>
              </div>
              <div>
                {integration.status === 'connected' ? <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Configure
                  </button> : integration.status === 'error' ? <button className="px-4 py-2 border border-red-300 rounded-md text-red-700 bg-white hover:bg-red-50">
                    Fix
                  </button> : <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Connect
                  </button>}
              </div>
            </div>)}
        </div>
      </div>
      {/* Google Analytics Setup */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-100 rounded-full text-blue-600">
            <div size={20} />
          </div>
          <h2 className="ml-3 text-lg font-medium text-gray-900">
            Google Analytics
          </h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tracking ID
            </label>
            <input type="text" className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX" value="UA-12345678-1" />
            <p className="mt-1 text-xs text-gray-500">
              Enter your Google Analytics tracking ID. You can find this in your
              Google Analytics account.
            </p>
          </div>
          <div className="flex items-center">
            <input id="anonymize-ip" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
            <label htmlFor="anonymize-ip" className="ml-2 block text-sm text-gray-900">
              Anonymize IP addresses
            </label>
          </div>
          <div className="flex items-center">
            <input id="track-logged-in" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label htmlFor="track-logged-in" className="ml-2 block text-sm text-gray-900">
              Track logged-in users
            </label>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Advanced Settings
            </h3>
            <textarea className="w-full h-32 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm" placeholder="Additional tracking code" value={`// Additional tracking code
gtag('config', 'UA-12345678-1', {
  'page_title': 'Homepage',
  'page_path': '/home'
});`}></textarea>
          </div>
          <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Test Connection
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      {/* Custom Scripts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Custom Scripts
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Add custom scripts to your site's header or footer.
        </p>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Header Scripts (Inside &lt;head&gt;)
            </label>
            <textarea className="w-full h-32 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm" placeholder="<!-- Add scripts that should load in the header -->"></textarea>
            <p className="mt-1 text-xs text-gray-500">
              These scripts will be added to the &lt;head&gt; section of your
              site.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Footer Scripts (Before &lt;/body&gt;)
            </label>
            <textarea className="w-full h-32 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm" placeholder="<!-- Add scripts that should load at the end of the body -->" value={`<!-- Live Chat Widget -->
<script>
  window.intercomSettings = {
    app_id: "abc123"
  };
</script>
<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/abc123';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>`}></textarea>
            <p className="mt-1 text-xs text-gray-500">
              These scripts will be added just before the closing &lt;/body&gt;
              tag.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Save Scripts
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default IntegrationsPage;