/*
 * gnome-shell-extension-remove-search-providers
 *     by Alexander Seleznev <seleznevru@gmail.com>
 *
 * LICENSE: GPLv3
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

const Overview =  imports.ui.main.overview;
const allProviders = Overview._viewSelector._searchTab._searchSystem._providers;

let removesProviders = new Array();

function init() {
    this.removesProviders = allProviders.filter( function(i){ return i.title != _("APPLICATIONS") && i.title != _("SETTINGS"); } );
}

function enable() {
    this.removesProviders.forEach( function(i){ Overview.removeSearchProvider(i); } );
}

function disable() {
    this.removesProviders.forEach( function(i){ Overview.addSearchProvider(i); } );
}
