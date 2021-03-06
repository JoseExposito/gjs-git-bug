/* main.js
 *
 * Copyright 2021 José Expósito
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

pkg.initGettext();
pkg.initFormat();
pkg.require({
  'Gio': '2.0',
  'Gtk': '3.0',
  'Hello': '1.0.0'
});

const { Gio, Gtk, Hello } = imports.gi;

log(Hello.say_hello());

const { GirTestWindow } = imports.window;

function main(argv) {
    const application = new Gtk.Application({
        application_id: 'com.gir.test',
        flags: Gio.ApplicationFlags.FLAGS_NONE,
    });

    application.connect('activate', app => {
        let activeWindow = app.activeWindow;
        
        if (!activeWindow) {
            activeWindow = new GirTestWindow(app);
        }

        activeWindow.present();
    });

    return application.run(argv);
}
