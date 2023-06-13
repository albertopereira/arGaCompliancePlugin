<?php
/*
 * This file is part of the plugin arGaCompliancePlugin for Access to Memory (AtoM) software.
 *
 * Access to Memory (AtoM) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * arGaCompliancePlugin is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * @author Alberto Pereira <albertopereira@gmail.com>
 */

class arGaCompliancePluginConfiguration extends sfPluginConfiguration
{
  public static
    $summary = 'Plugin to add a form to remove GA to comply with RGPD.',
    $version = '1.0.0';

  public function contextLoadFactories(sfEvent $event)
  {
    $context = $event->getSubject();
    $context->response->addJavaScript('/plugins/arGaCompliancePlugin/env.js');
    $context->response->addJavaScript('/plugins/arGaCompliancePlugin/lib/gacompliance.js');
    $context->response->addStylesheet('/plugins/arGaCompliancePlugin/lib/gacompliance.css');
  }

  /**
   * @see sfPluginConfiguration
   */
  public function initialize()
  {
    $this->dispatcher->connect('context.load_factories', array($this, 'contextLoadFactories'));

    $enabledModules = sfConfig::get('sf_enabled_modules');
    $enabledModules[] = 'arGaCompliancePlugin';
    sfConfig::set('sf_enabled_modules', $enabledModules);
  }
}
